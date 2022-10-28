import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup)

it('Button Renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON()

    expect(tree).toMatchSnapshot()
})

