<template>
    <div class="card is-flex is-flex-direction-column is-align-items-center p-4 "
        style="max-width: fit-content; justify-self: center;">
        <div class="card-header">
            <h1 class="title">🪙 {{ result }}</h1>
        </div>
        <div class="card-content is-flex is-flex-direction-column">

            <div class="columns is-flex is-align-items-end">
                <div class="column">
                    <h2>Origem:</h2>
                    <div class="select">
                        <select v-model="fromCurrency">
                            <option v-for="(currency, code) in currencies" :key="code" :value="code">{{
                                currency.name.split('/')[0].trim() }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="column">
                    <input class="input" style="max-width: 10vw;" type="number" v-model="amount" placeholder="Valor">
                </div>

                <div class="column">
                    <h2 class="mt-3">Destino:</h2>
                    <div class="select">
                        <select class="select" v-model="toCurrency">
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
        result.value = `${amount.value} ${fromCurrency.value} equivalem à ${convertedValue} `;
    } catch (error) {
        result.value = "Erro ao converter, tente novamente...";
        console.error("Erro ao converter a moeda:", error);
    }
}

onMounted(loadCurrencies);
</script>

<style scoped></style>
