import Category from '../components/Category';

function CategoryList(props) {
    return (<div>
        {props.categories.map(category => (
            <Category
                key={category.id}
                name={category.name}
                category={category.category} />
        ))}
    </div>);
}

export default CategoryList;