import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('test <GifExpertApp />', () => {

    test('should render', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })


    test('should show a list of categories', () => {

        const categories = ["One Piece", "HxH"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);

    })


})
