export const formatPrice=(amount)=>{
    return new Intl.NumberFormat("en-Us",{
        style:"currency",
        currency:"USD"
    }).format(amount)
}