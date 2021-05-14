import { shallow } from 'enzyme'
import { USERS as usersData, Users } from '../Users'

describe('users list comp test', () => {
    describe('if no data', () => {
        test('if empty list or no list show msg "no data found"', () => {
            const wrapper = shallow(<Users usersData={null} />)

            const p = wrapper.find('p').text()

            expect(p).toBe('no data found')
            
            console.log(wrapper.debug())
        })
    })

    describe('if data', () => {
        const wrapper = shallow(<Users usersData={usersData} />)
        
        test('if users data than its length should be equal to users data length', () => {
            const usersList = wrapper.find('h1')
            expect(usersList).toHaveLength(3)
        })

        test('if users data than first user name should be "name 1"', () => {
            const usersList = wrapper.find('h1')
            expect(usersList.first().text()).toBe('name 1')
        })

        test('if users data than last user name should be "name 3"', () => {
            const usersList = wrapper.find('h1')
            expect(usersList).toHaveLength(3)
            expect(usersList.last().text()).toBe('name 3')
        })

        console.log(wrapper.debug())
    })
})