import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { isExportDeclaration } from 'typescript';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> {/*exact para que não mostre a página a todo instante por conta de apenas possuir a "/" */}
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </ BrowserRouter>
    )
}

export default Routes;