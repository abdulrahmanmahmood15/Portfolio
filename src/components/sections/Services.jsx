import { Scroll, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Services = () => {
    const { height } = useThree((state) => state.viewport);

    return (
        <Scroll>
            {/* Page 3: y = -height * 3 */}
            <group position={[0, -height * 3, 0]}>
                <Text position={[0, 1, 0]} fontSize={1} color="white" anchorX="center" anchorY="bottom">
                    SERVICES
                </Text>

                <Text position={[0, -0.5, 0]} fontSize={0.3} color="#a3a3a3" anchorX="center" anchorY="top" maxWidth={5} textAlign="center">
                    Web Development • 3D Experiences • UI/UX Design
                </Text>
            </group>
        </Scroll>
    );
};
