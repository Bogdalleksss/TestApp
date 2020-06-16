import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

export default class ImageScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <GoBack onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrow-left" size={28} color="#ffffff" />
                    </GoBack>
                    <Tilte>Автор: {this.props.navigation.state.params.user}</Tilte>
                </Header>
                
                <Image source={{uri: this.props.navigation.state.params.urls.full}}/>
                <Loading source={require('../src/img/loading.gif')}/>
            </Container>
        )
    }
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;  
    background-color: #000000; 
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    z-index: 2;
`

const GoBack = styled.TouchableOpacity``

const Tilte = styled.Text`
    color: #ffffff;
    width: 80%;
    margin-left: 30px;
    font-size: 28px;
    font-weight: bold;
`

const Header = styled.View`
    width: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 40px;
    flex-direction: row;
    align-items: center;
`

const Loading = styled.Image`
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 1;
`

// const CardsContainer = styled.SafeAreaView