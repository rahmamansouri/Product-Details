const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Track your all day activity, 24/7 heart rate, & sleep stages, all with a 4 plus day battery life (varies with use and other factors), charge time (0 to 100 percent): two hours. Slim, comfortable design with a lightweight, anodized aluminum watch body.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;