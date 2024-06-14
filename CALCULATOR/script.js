<script>
function clearInput() {
    document.getElementById('result').value = '';
}

function changeSign() {
    let result = document.getElementById('result').value;
    if (result !== '') {
        if (result[0] === '-') {
            document.getElementById('result').value = result.slice(1);
        } else {
            document.getElementById('result').value = '-' + result;
        }
    }
}

function append(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
</script>