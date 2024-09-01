document.getElementById('shape').addEventListener('change', function() {
    const shape = this.value;
    const container = document.getElementById('inputsContainer');
    container.innerHTML = '';

    if (shape === 'square') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="side" placeholder="Ingresa el lado en metros">
            </div>
        `;
    } else if (shape === 'rectangle') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="length" placeholder="Ingresa el largo en metros">
            </div>
            <div class="input-container">
                <input type="number" id="width" placeholder="Ingresa el ancho en metros">
            </div>
        `;
    } else if (shape === 'circle') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="radius" placeholder="Ingresa el radio en metros">
            </div>
        `;
    } else if (shape === 'triangle') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="base" placeholder="Ingresa la base en metros">
            </div>
            <div class="input-container">
                <input type="number" id="height" placeholder="Ingresa la altura en metros">
            </div>
        `;
    } else if (shape === 'cube') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="cubeSide" placeholder="Ingresa el lado en metros">
            </div>
        `;
    } else if (shape === 'rectangularPrism') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="prismLength" placeholder="Ingresa el largo en metros">
            </div>
            <div class="input-container">
                <input type="number" id="prismWidth" placeholder="Ingresa el ancho en metros">
            </div>
            <div class="input-container">
                <input type="number" id="prismHeight" placeholder="Ingresa la altura en metros">
            </div>
        `;
    } else if (shape === 'sphere') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="sphereRadius" placeholder="Ingresa el radio en metros">
            </div>
        `;
    } else if (shape === 'cone') {
        container.innerHTML = `
            <div class="input-container">
                <input type="number" id="coneRadius" placeholder="Ingresa el radio en metros">
            </div>
            <div class="input-container">
                <input type="number" id="coneHeight" placeholder="Ingresa la altura en metros">
            </div>
        `;
    }
});

function calculate() {
    const shape = document.getElementById('shape').value;
    let perimeter = '', area = '', volume = '';

    if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        perimeter = `<strong>Perímetro:</strong> <br>${4 * side} metros`;
        area = `<strong>Área:</strong> <br>${side * side} metros cuadrados`;
    } else if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        perimeter = `<strong>Perímetro:</strong> <br>${2 * (length + width)} metros`;
        area = `<strong>Área:</strong> <br>${length * width} metros cuadrados`;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        perimeter = `<strong>Perímetro (Circunferencia):</strong> <br>${2 * Math.PI * radius} metros`;
        area = `<strong>Área:</strong> <br>${Math.PI * radius * radius} metros cuadrados`;
    } else if (shape === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        perimeter = `<strong>Perímetro:</strong> <br>No calculado`; // Perímetro no calculado sin lados
        area = `<strong>Área:</strong> <br>${0.5 * base * height} metros cuadrados`;
    } else if (shape === 'cube') {
        const side = parseFloat(document.getElementById('cubeSide').value);
        volume = `<strong>Volumen:</strong> <br>${Math.pow(side, 3)} metros cúbicos`;
        area = `<strong>Área de la superficie:</strong> <br>${6 * side * side} metros cuadrados`;
    } else if (shape === 'rectangularPrism') {
        const length = parseFloat(document.getElementById('prismLength').value);
        const width = parseFloat(document.getElementById('prismWidth').value);
        const height = parseFloat(document.getElementById('prismHeight').value);
        volume = `<strong>Volumen:</strong> <br>${length * width * height} metros cúbicos`;
        area = `<strong>Área de la superficie:</strong> <br>${2 * (length * width + width * height + height * length)} metros cuadrados`;
    } else if (shape === 'sphere') {
        const radius = parseFloat(document.getElementById('sphereRadius').value);
        volume = `<strong>Volumen:</strong> <br>${(4 / 3) * Math.PI * Math.pow(radius, 3)} metros cúbicos`;
        area = `<strong>Área de la superficie:</strong> <br>${4 * Math.PI * radius * radius} metros cuadrados`;
    } else if (shape === 'cone') {
        const radius = parseFloat(document.getElementById('coneRadius').value);
        const height = parseFloat(document.getElementById('coneHeight').value);
        volume = `<strong>Volumen:</strong> <br>${(1 / 3) * Math.PI * Math.pow(radius, 2) * height} metros cúbicos`;
        const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
        area = `<strong>Área de la superficie:</strong> <br>${(Math.PI * radius * slantHeight) + (Math.PI * radius * radius)} metros cuadrados`;
    }

    document.getElementById('perimeter').innerHTML = perimeter;
    document.getElementById('area').innerHTML = area;
    document.getElementById('volume').innerHTML = volume;
}
