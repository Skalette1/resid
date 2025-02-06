document.getElementById('phone').addEventListener('input', function (e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    
    const formattedValue = value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
    this.value = '+7 ' + formattedValue;
});
