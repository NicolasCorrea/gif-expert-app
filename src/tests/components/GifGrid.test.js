import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");


describe('test <GifGrid />', () => {

    test('should render', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={"One Piece"} />);
        expect(wrapper).toMatchSnapshot();
    })


    test('should show item whe load images from useFechGifs', () => {
        const gifs = [
            {
                id: "ABC1",
                url: "http://locahost/image.png",
                title: "something"
            },
            {
                id: "ABC2",
                url: "http://locahost/image.png",
                title: "something2"
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={"One Piece"} />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);


    })


})
