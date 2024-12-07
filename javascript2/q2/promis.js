async function fetchData() {
    try {
        const fakeStoreResponse = await fetch('https://fakestoreapi.com/products');
        const fakeStoreData = await fakeStoreResponse.json();
        const firebaseResponse = await fetch('https://your-firebase-database-url.firebaseio.com/products.json');
        const firebaseData = await firebaseResponse.json();
        const mergedData = mergeData(fakeStoreData, firebaseData.products);
        const { mostExpensive, shortestWarranty, combinedInsight } = analyzeData(mergedData);
        displayData(mergedData, mostExpensive, shortestWarranty);
        displaySummary(mostExpensive, shortestWarranty, combinedInsight);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function mergeData(fakeStoreData, firebaseData) {
    const merged = fakeStoreData.map(fakeStoreProduct => {
        const firebaseProduct = firebaseData.find(product => product.title === fakeStoreProduct.title);
        return {
            title: fakeStoreProduct.title,
            price: fakeStoreProduct.price,
            category: fakeStoreProduct.category,
            image: fakeStoreProduct.image,
            rating: fakeStoreProduct.rating,
            sellerName: firebaseProduct ? firebaseProduct.sellerName : '',
            availability: firebaseProduct ? firebaseProduct.availability : '',
            manufacturingDate: firebaseProduct ? firebaseProduct.manufacturingDate : '',
            warranty: firebaseProduct ? firebaseProduct.warranty : ''
        };
    });
    return merged;
}

function analyzeData(mergedData) {
    let mostExpensive = mergedData[0];
    let shortestWarranty = mergedData[0];

    mergedData.forEach(product => {
        if (product.price > mostExpensive.price) mostExpensive = product;

        const warrantyMonths = parseInt(product.warranty) || 0;
        if (warrantyMonths < parseInt(shortestWarranty.warranty)) shortestWarranty = product;
    });

    const combinedInsight = {
        mostExpensiveWithShortestWarranty: mergedData
            .filter(product => product.price === mostExpensive.price && product.warranty === shortestWarranty.warranty)[0]
    };

    return { mostExpensive, shortestWarranty, combinedInsight };
}

function displayData(mergedData, mostExpensive, shortestWarranty) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    mergedData.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.title}</td>
            <td class="${product.price === mostExpensive.price ? 'highlight-expensive' : ''}">${product.price}</td>
            <td>${product.category}</td>
            <td>${product.availability}</td>
            <td class="${product.warranty === shortestWarranty.warranty ? 'highlight-shortest-warranty' : ''}">${product.warranty}</td>
            <td>${product.sellerName}</td>
        `;
        tableBody.appendChild(row);
    });
}

function displaySummary(mostExpensive, shortestWarranty, combinedInsight) {
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <h2>Summary:</h2>
        <p><strong>Most Expensive Product:</strong> ${mostExpensive.title} - $${mostExpensive.price}</p>
        <p><strong>Shortest Warranty Product:</strong> ${shortestWarranty.title} - ${shortestWarranty.warranty} months</p>
        <p><strong>Most Expensive with Shortest Warranty:</strong> ${combinedInsight.mostExpensiveWithShortestWarranty.title} - $${combinedInsight.mostExpensiveWithShortestWarranty.price}, ${combinedInsight.mostExpensiveWithShortestWarranty.warranty} months warranty</p>
    `;
}

function sortTable(n) {
    const table = document.getElementById("product-table");
    const rows = Array.from(table.rows).slice(1);
    const isNumericColumn = n === 1; 

    rows.sort((a, b) => {
        const cellA = a.cells[n].innerText;
        const cellB = b.cells[n].innerText;

        if (isNumericColumn) {
            return parseFloat(cellA) - parseFloat(cellB);
        }
        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => table.appendChild(row));
}

fetchData();
