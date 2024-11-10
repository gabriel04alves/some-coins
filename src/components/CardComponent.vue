<template>
    <div class="card is-flex is-flex-direction-column is-align-items-center p-4 mx-4 mt-6"
        style="max-width: fit-content; justify-self: center;">
        <div class="card-header">
            <h1 class="title has-text-centered">🪙 {{ result }}</h1>
        </div>
        <div class="card-content is-flex is-flex-direction-column">

            <div class="columns is-flex is-align-items-end is-flex-wrap-wrap">
                <div class="column">
                    <h2>Origem:</h2>
                    <div class="select">
                        <select v-model="fromCurrency">
                            <option value="" disabled selected>Selecione a moeda de origem</option>
                            <option v-for="(currency, code) in currencies" :key="code" :value="code">{{
                                currency.name.split('/')[0].trim() }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="column">
                    <h2>Valor:</h2>
                    <input class="input" type="number" min="0" v-model="amount" placeholder="Digite um valor">
                </div>

                <div class="column">
                    <h2 class="">Destino:</h2>
                    <div class="select">
                        <select class="select" v-model="toCurrency">
                            <option value="" disabled selected>Selecione a moeda de destino</option>
                            <option v-for="(currency, code) in currencies" :key="code" :value="code">{{
                                currency.name.split('/')[0].trim() }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <button class="button mt-5" @click="handleConvertCurrency">Converter</button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrencies } from '../composables/fetchCurrencies';
import { convertCurrency } from '../composables/currencyConverter';
import { formatCurrency } from '@/utils/formatCurrency';

const fromCurrency = ref('');
const toCurrency = ref('');
const amount = ref();
const result = ref('Some coins');
const currencies = ref({});

const loadCurrencies = async () => {
    try {
        currencies.value = await fetchCurrencies();
    } catch (error) {
        console.error("Erro ao carregar as moedas:", error);
    }
}

const handleConvertCurrency = async () => {
    if (!amount.value || amount.value <= 0) {
        result.value = "Tente novamente com um valor válido.";
        return;
    }

    if (fromCurrency.value === toCurrency.value) {
        result.value = amount.value;
        return;
    }

    try {
        let convertedValue = await convertCurrency(fromCurrency.value, toCurrency.value, amount.value);
        result.value = `${formatCurrency(amount.value, "pt-BR", fromCurrency.value)} equivalem à ${convertedValue} `;
    } catch (error) {
        result.value = "Erro ao converter, tente outra conversão...";
        console.error("Erro ao converter a moeda:", error);
    }
}

onMounted(loadCurrencies);
</script>

<style scoped></style>
