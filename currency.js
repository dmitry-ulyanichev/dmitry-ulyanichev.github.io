let exchangeRates = {};
// let toResultUsd = 0.0;
let toResult = 0.0;
// let fromResultUsd = 0.0;
let fromResult = 0.0;
document.addEventListener('DOMContentLoaded', function() {
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');
    const fromValue = document.getElementById('fromNumber');
    const toValue = document.getElementById('toNumber');

    fetch('https://v6.exchangerate-api.com/v6/2311df33350d5c9169925f09/latest/USD')
    .then(response => response.json())
    .then(data => {
        exchangeRates = data.conversion_rates;
        for (const currency in exchangeRates) {
            addOption(fromSelect, currency);
            addOption(toSelect, currency);
        }
        fromSelect.value = 'USD';
        toSelect.value = 'EUR';
        toValue.value = exchangeRates.EUR.toFixed(2);
    })
    .catch(error => {
        console.log('Error:', error);
    });

    function addOption(select, currency) {
        const option = document.createElement('option');
        option.textContent = currency;
        option.value = currency;
        select.appendChild(option);
    }

    fromSelect.oninput = function() {
        calculate_to_sum();
    }

    fromValue.oninput = function() {
        calculate_to_sum();
    }

    toSelect.oninput = function() {
        calculate_to_sum();
    }

    toValue.oninput = function() {
        calculate_from_sum();
    }

    function calculate_to_sum() {
        fromResult = fromValue.value / exchangeRates[fromCurrency.value];
        toResult = exchangeRates[toCurrency.value];
        const result = toResult * fromResult;
        toValue.value = result.toFixed(2);
    }

    function calculate_from_sum() {
        toResult = toValue.value / exchangeRates[toCurrency.value];
        fromResult = exchangeRates[fromCurrency.value];
        const result = fromResult * toResult;
        fromValue.value = result.toFixed(2);
    }
});