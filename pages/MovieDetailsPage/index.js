import { Text, View } from "react-native";

export function MovieDetailsPage({route}){

        const {filme} = route.params;

    return(
        <View>
            <Text> Detalhe dos filmes</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}