function Category(props) {
    return (
        <div>
            <div className="categoryName">{props.name}</div>
            <div className="categoryCategory">{props.category}</div>
        </div>
    )
}

export default Category;