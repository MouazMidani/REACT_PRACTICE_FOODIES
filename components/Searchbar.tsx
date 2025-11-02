import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { images } from '@/constants'
import { useDebouncedCallback } from "use-debounce"

const Searchbar = () => {
    const params = useLocalSearchParams<{query?: string}>() 
    const [query, setQuery] = useState(params.query)

    const debounceSearch = useDebouncedCallback(
        (text: string) => router.push(`/search?query=${text}`),
        500
    )

    const handleSearch = (text: string) => {
        setQuery(text)
        debounceSearch(text)
    }

    return (
        <View className="searchbar">
            <TextInput 
                className="flex-1 p-5"
                placeholder='Search for Pizzas, Burgers...'
                value={query} 
                onChangeText={handleSearch}
                placeholderTextColor="#a0a0a0"
            />  
            <TouchableOpacity className='pr-5' onPress={() => {}}>
                    <Image source={images.search} className='size-6' resizeMode='contain' tintColor="#5d5f6d"/>
            </TouchableOpacity>
        </View>
    )
}

export default Searchbar