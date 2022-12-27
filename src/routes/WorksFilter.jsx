import Data from "./Works"


const WorksFilter = ({ filterItem, setItem, menuItems }) => {
    return (
        <ul id="worksFilter">
            <li className="link worksFilter__link" onClick={() => setItem(Data)}>
                all
                <span></span>
            </li>
            {menuItems.map((Val, id) => {
                return (
                    <li className="link worksFilter__link" key={id} onClick={() => filterItem(Val)}>
                        {Val}
                        <span></span>
                    </li>
                );
            })}
        </ul>
    )
}

export default WorksFilter