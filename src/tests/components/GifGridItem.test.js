import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('<GifGridItem /> Tests', () => {
    const title = "gif title";
    const url = "https://www.git.url";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('should render component', () => {
        
        
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a paragraph with title', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title)
    })
    
    test('should have image equal to url and alt from props', () => {
        const image = wrapper.find("img");
        
        expect(image.prop("src")).toBe(url);
        expect(image.prop("alt")).toBe(title);
    })
    
    test('should have class animated_fadeIn', () => {
        const div = wrapper.find("div");
        
        expect(div.prop("className").includes("animate__fadeIn")).toBe(true)
    })
    
    
    
})