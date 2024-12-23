import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const Popularmenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // },[])
    return (
        <section>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 pb-5">
                {
                    popular.map(item=><MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default Popularmenu;