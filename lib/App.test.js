"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@testing-library/react");
var App_1 = tslib_1.__importDefault(require("./App"));
test('renders learn react link', function () {
    react_2.render(react_1.default.createElement(App_1.default, null));
    var title = react_2.screen.getAllByTitle(/测试titile/i);
    // const linkElement = screen.getByText(/learn react/i);
    console.log('title>>>', title);
    expect(title).toBeInTheDOM();
});
