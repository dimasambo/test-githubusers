import React, {Component} from 'react';
import './App.css';
import {HashRouter, Link, Redirect, Route, Router, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./Redux/redux-store";

import "antd/dist/antd.css";
import {Layout, Menu} from 'antd';
import {UsersPage} from "./components/UsersPage/UsersPage";
import {UserPage} from "./components/UserPage/UserPage";

const {Header, Content, Footer, Sider} = Layout;

const items = [
    {label: <Link to='/users'>Users</Link>, key: 'item-1'}
];

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return ( /*<div>*/
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                        style={{marginTop: "60px"}}
                    >
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/users"}/>}/>
                                <Route path='/users'>
                                    <UsersPage />
                                </Route>
                                <Route path='/user/:userLogin'>
                                    <UserPage />
                                </Route>

                                {/*<Route path='/user/:userLogin'
                                       component={UserPage}/>*/}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Test project by Dima Rui</Footer>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const GithubUsersApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default GithubUsersApp;