import Data from "./Data"


const WorksFilter = ({ filterItem, setItem, menuItems }) => {
    return (
        <div id="worksFilter">
            <button onClick={() => setItem(Data)}>
                All
            </button>
            {menuItems.map((Val, id) => {
                return (
                    <button key={id} onClick={() => filterItem(Val)}>
                        {Val}
                    </button>
                );
            })}
        </div>
    )
}

export default WorksFilter