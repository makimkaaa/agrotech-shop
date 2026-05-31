// отзывы

loadReviews();

// добавление
function addReview() {

    let name =
        document.getElementById(
            "reviewName").value;

    let text =
        document.getElementById(
            "reviewText").value;

    if (
        name == "" ||
        text == ""
    ) {
        alert(
            "Заполните все поля"
        );
        return;
    }

    let reviews =
        JSON.parse(
            localStorage.getItem(
                "reviews"
            )
        ) || [];

    reviews.push({

        name: name,
        text: text

    });

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    document.getElementById(
        "reviewName"
    ).value = "";

    document.getElementById(
        "reviewText"
    ).value = "";

    loadReviews();

}

// загрузка
function loadReviews() {

    let reviews =
        JSON.parse(
            localStorage.getItem(
                "reviews"
            )
        ) || [];

    let block =
        document.getElementById(
            "reviewsList"
        );

    if (!block) {
        return;
    }

    block.innerHTML = "";

    reviews.forEach(
        function (review) {

            block.innerHTML +=

                `
<div class="review-card">

<h3>
${review.name}
</h3>

<p>
${review.text}
</p>

</div>
`;

        });

}