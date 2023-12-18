//Basketball Order Page
const noChoice = document.getElementById('no-choice');
const shortColor = document.getElementById('short-color');
const youthSmall = document.getElementById('short-youth-small');
const youthMedium = document.getElementById('short-youth-medium');
const youthLarge = document.getElementById('short-youth-large');
const youthXL = document.getElementById('short-youth-xl');
const small = document.getElementById('short-small');
const medium = document.getElementById('short-medium');
const large = document.getElementById('short-large');
const extraLarge = document.getElementById('short-xl');

noChoice.addEventListener('change', function() {
    shortColor.disabled = this.checked;
    shortColor.value = '';
    youthSmall.disabled = this.checked;
    youthSmall.value = '';
    youthMedium.disabled = this.checked;
    youthMedium.value = '';
    youthLarge.disabled = this.checked;
    youthLarge.value = '';
    youthXL.disabled = this.checked;
    youthXL.value = '';
    small.disabled = this.checked;
    small.value = '';
    medium.disabled = this.checked;
    medium.value = '';
    large.disabled = this.checked;
    large.value = '';
    extraLarge.disabled = this.checked;
    extraLarge.value = '';
});