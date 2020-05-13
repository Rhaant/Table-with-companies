import React from 'react'
import {shallow} from 'enzyme'
import TableRow from './tableRow.component'

describe('TableRow component', ()=> {
    it('shoud render with out crashing', () => {
        const company = {
            id: 11,
            name: 'testName',
            city: 'testCity',
            incomeTotal: 422,
            incomeAverge: 322,
            incomesLastMonth: 222
        }
        const component = shallow(<TableRow company={company} />)

        expect(component).toMatchSnapshot();
    })
})