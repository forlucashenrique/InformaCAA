import { Stack } from "expo-router";

export default function HomeLayout () {
    return (
        <Stack
        >
            <Stack.Screen name='index' options={{
               title: '',
               headerShown: false
            }} />
            <Stack.Screen name='details' options={{
                title: 'Menu'
            }}/>
        </Stack>
    )
}