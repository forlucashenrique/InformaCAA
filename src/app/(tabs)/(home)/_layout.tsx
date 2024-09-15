import { Stack } from "expo-router";

export default function HomeLayout () {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#0B3472'
                },
                headerTitleStyle: {
                    fontFamily: 'Montserrat_700Bold',
                    fontSize: 20,
                },
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name='index' options={{
               title: '',
               headerShown: false
            }} />

            <Stack.Screen name='[id]' options={{
               title: '',
             
            }} />
            
            <Stack.Screen name='sigaa' options={{
               title: 'SIGAA',
            }} />

            <Stack.Screen name='pergamum' options={{
               title: 'Pergamum',
            }} />
            
            <Stack.Screen name='contacts' options={{
               title: 'Contatos',
            }} />

            <Stack.Screen name='about' options={{
               title: 'Sobre',
            }} />

            <Stack.Screen name='events' options={{}} />

        </Stack>
    )
}