import product from '../assets/img/Coppette1.jpeg';

export const Product = () => {
    return (
        <article className="product container" id="the-product">
            <div className='product-img'>
                <img src={product} alt="" />
            </div>
            <div className="product-text">
                <h2 className="product-title">
                    Silverette<sup>®</sup> the original silver protection for nipples
                </h2>
                <p className="content">
                    They are the ideal solution to enjoy breastfeeding. After a number of years working with mothers, doctors and obstetricians, the Silverette<sup>®</sup>  the original design was molded with its unique rounded apex to accomodate the natural shape of nipples. The enormous success that Silverette<sup>®</sup> the original is having in Italy, Europe and in the rest of the world, with sales in more than 25 Countries, makes it the best seller in its category.
                </p>
                <small>
                    Silverette® are a Class I Medical Device – Regulation 745/2017. The silver cups are in accordance with the law (5.02.1934) related to the double hallmark on silver products.
                </small>
            </div>
        </article>
    )
}
