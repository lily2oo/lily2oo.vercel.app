import Data from "./Works"


const WorksFilter = ({ filterItem, setItem, menuItems }) => {
    return (
        <ul id="worksFilter">
            <li className="link" onClick={() => setItem(Data)}>
                all
            </li>
            {menuItems.map((Val, id) => {
                return (
                    <li className="link" key={id} onClick={() => filterItem(Val)}>
                        {Val}
                    </li>
                );
            })}
        </ul>
    )
}

export default WorksFilter