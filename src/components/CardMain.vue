<script setup>
</script>

<template>
    <div class="card-container flex flex-col items-center">
        <div class="container-fromCurrency flex justify-center items-center">
            <h2>From:</h2>
            <select v-model="fromCurrency" class="border p-2 rounded">
                <option v-for="(currency, code) in currencies" :key="code" :value="code">{{ code }}</option>
            </select>
        </div>
        <input type="number" v-model="amount" placeholder="Valor" class="border p-2 rounded mb-2">
        <div class="container-toCurrency flex justify-center items-center">
            <h2>To:</h2>
                <select v-model="toCurrency" class="border p-2 rounded mb-2">
                <option v-for="(currency, code) in currencies" :key="code" :value="code">{{ code }}</option>
            </select>
        </div>
        <button @click="convertCurrency" class="bg-blue-500 text-white p-2 rounded">Converter</button>
        <div class="mt-4">
            <h2 class="text-lg">{{toCurrency}} {{result}}</h2>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const fromCurrency = ref('USD');
const toCurrency = ref('BRL');
const amount = ref(1);
const result = ref('');
const currencies = ref({});

// função para buscar a moedas disponíveis na API:
const fetchCurrencies = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/json/all');
        currencies.value = response.data;
    } catch(error) {
        console.error("Erro ao buscar as moedas:", error);
    }
}

// converte moedas
const convertCurrency = async () => {
    if (fromCurrency.value === toCurrency.value) {
        result.value = amount.value;
        return
    }
    try {
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${fromCurrency.value}-${toCurrency.value}`);
        const rate = response.data[`${fromCurrency.value}${toCurrency.value}`].bid;
        result.value = (amount.value * rate).toFixed(2);
    } catch (error) {
        console.error("Erro ao converter a moeda:", error);
    }
}

// Registra a função fetchCurrencies para ser executada quando o componente for montado no DOM.
onMounted(fetchCurrencies);

</script>