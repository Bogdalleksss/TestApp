import React from 'react'
import styled from 'styled-components'
import CardItem from '../src/components/CardItem'
import { connect } from 'react-redux'
import { getData } from '../src/actions'

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getData()
    }

    goToScreen = (screen, params) => this.props.navigation.navigate(screen, params)

    render() {
        console.log(this.props.isLoad)
        return (
            <Container>
                <Header>
                    <TitleApp>Gallery App</TitleApp>
                    
                </Header>
                <Loading isLoad={this.props.isLoad} source={require('../src/img/loading-home.gif')}/>
                <ScrollWrapper>
                    <CardsWrapper> 
                        {
                            this.props.data.map(item => 
                                <CardItem 
                                    title={item.alt_description} 
                                    user={item.user.username} 
                                    uri={item.urls} 
                                    key={item.id}
                                    goTo={this.goToScreen}
                                />)
                        }
                    </CardsWrapper>
                </ScrollWrapper>
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Header = styled.View`
    padding-top: 10px;
    background: #7a0fb4;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    box-shadow: 0px 0px 6px rgba(50, 50, 50, 0.42);
    elevation: 10;
`

const TitleApp = styled.Text`
    color: #ffffff;
    font-size: 34px;
    font-weight: bold;
`

const CardsWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 10px;
    z-index: 1;
`

const Loading = styled.Image`
    position: absolute;
    z-index: 2;
    width: 120px;
    height: 120px;
    opacity: ${props => props.isLoad ? 0 : 100}
`

const ScrollWrapper = styled.ScrollView``

const mapStateToProps = state => {
    return {
        data: state.app.data,
        isLoad: state.app.isLoad
    }
}

export default connect(mapStateToProps, { getData })(HomeScreen)