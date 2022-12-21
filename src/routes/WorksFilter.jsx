import Data from "./Works"


const WorksFilter = ({ filterItem, setItem, menuItems }) => {
    return (
        <ul id="worksFilter">
            <li onClick={() => setItem(Data)}>
                all
            </li>
            {menuItems.map((Val, id) => {
                return (
                    <li key={id} onClick={() => filterItem(Val)}>
                        {Val}
                    </li>
                );
            })}
        </ul>
    )
}

export default WorksFilter