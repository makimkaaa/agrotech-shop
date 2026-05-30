let selectedProduct = "";

// открыть окно
function openOrder(product) {

    selectedProduct = product;

    document.getElementById("modal")
        .style.display = "block";

    document.getElementById("productName")
        .innerText =
        "Товар: " + product;
}

// закрыть
function closeModal() {

    document.getElementById("modal")
        .style.display = "none";
}

// отправка
function sendOrder() {

    let phone =
        document.getElementById("phone").value;

    let address =
        document.getElementById("address").value;

    let house =
        document.getElementById("house").value;

    let entrance =
        document.getElementById("entrance").value;

    let floor =
        document.getElementById("floor").value;

    let flat =
        document.getElementById("flat").value;

    if (phone == "" || address == "") {

        alert(
            "Заполните телефон и адрес"
        );

        return;
    }

    alert(
        "Заказ оформлен!\n\n" +
        "Товар: " + selectedProduct +
        "\nТелефон: " + phone +
        "\nАдрес: " + address +
        "\nДом: " + house +
        "\nПодъезд: " + entrance +
        "\nЭтаж: " + floor +
        "\nКвартира: " + flat
    );

    closeModal();
}