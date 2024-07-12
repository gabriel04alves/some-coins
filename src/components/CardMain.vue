<script setup>
</script>

<template>
    <div class="card-container flex flex-col items-center">
        <div class="container-fromCurrency flex justify-center items-center">
            <h2>From:</h2>
            <select v-model="fromCurrency" class="border p-2 rounded">
                <option value="USD">USD</option>
                <option value="BRL">BRL</option>
                <option value="BTC">BTC</option>
            </select>
        </div>
        <input type="number" placeholder="Valor" class="border p-2 rounded mb-2">
        <div class="container-toCurrency flex justify-center items-center">
            <h2>To:</h2>
                <select v-model="toCurrency" class="border p-2 rounded mb-2">
                <option value="USD">USD</option>
                <option value="BRL">BRL</option>
                <option value="BTC">BTC</option>
            </select>
        </div>
        <button class="bg-blue-500 text-white p-2 rounded">Converter</button>
        <div class="mt-4">
            <h2 class="text-lg">R$00.00</h2>
        </div>
    </div>
</template>