import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { loaderStyles } from '@/styles/common';

interface CatLoaderProps {
    message?: string;
    fullScreen?: boolean;
    size?: number;
}

export default function CatLoader({
    message = 'Loading...',
    fullScreen = true,
    size = 120,
}: CatLoaderProps) {
    return (
        <View style={[
            loaderStyles.container,
            fullScreen && loaderStyles.fullScreen,
        ]}>
            <Image source={require('@/assets/images/cat-loader.gif')}
                style={{
                    width: size,
                    height: size,
                }}
                contentFit="contain"
                transition={200}
            />

            {message ? (
                <Text style={loaderStyles.message}>
                    {message}
                </Text>
            ) : null}
        </View>
    );
}