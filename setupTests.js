// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//const Enzyme = require('enzyme');
//const EnzymeAdapter = require('enzyme-adapter-react-15');

import Enzyme from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';


// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });