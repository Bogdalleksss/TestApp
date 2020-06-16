import React from 'react'
import styled from 'styled-components'
import {View, Text} from 'react-native'

const CardItem = ({title, uri, user, goTo}) => {
    return (
        <CardItemWrapper activeOpacity={0.6} onPress={() => goTo('Image', {urls: uri, user, title})}>
            <ImageWrapper>
                <Image source={{uri: uri.small}}/>
            </ImageWrapper>

            <CardItemName>{title}</CardItemName>
            <CardItemAuthor>Автор: <Link>{user}</Link> </CardItemAuthor>
        </CardItemWrapper>
    )
}


const CardItemWrapper = styled.TouchableOpacity`
    width: 95%;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 6px rgba(50, 50, 50, 0.42);
    elevation: 10;
    background: #ffffff;
    margin: 10px;
`

const ImageWrapper = styled.View`
    width: 100%;
    height: 160px;
    border-radius: 10px;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

const CardItemName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    width: 90%;
`

const Link = styled.Text`
    font-weight: bold;
`

const CardItemAuthor = styled.Text`
    font-size: 14px;
    color: #8a8a8a;
    margin-bottom: 25px;
    margin-top: 5px;
    
`

export default CardItem