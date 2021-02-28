import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('test on <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    
    test('should render', () => {    
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should change input', () => {
        
        const input = wrapper.find("input");
        const value = "hola";
        input.simulate("change", { target:{ value } })
        expect(wrapper.find("p").text().trim()).toBe(value)
        
    })
    
    test('should not submit', () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} })
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('should submit and clear input', () => {
        const value = "hola";
        const input = wrapper.find("input");
        input.simulate("change", { target:{ value } })

        wrapper.find("form").simulate("submit", { preventDefault(){} })
        expect(setCategories).toHaveBeenCalledTimes(1)
        
        expect(input.prop("value")).toBe("")
    })
    
    
    
    
})
