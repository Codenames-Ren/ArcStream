import { serverSelectorStyles } from "@/styles/common";
import { StreamServer } from "@/types";
import { Pressable, Text, View } from "react-native";

interface ServerSelectorProps {
  servers: StreamServer[];
  selectedServer?: string;
  onChange: (serverId: string) => void;
}

export default function ServerSelector({
  servers,
  selectedServer,
  onChange,
}: ServerSelectorProps) {
  if (!servers.length) {
    return null;
  }

  return (
    <View style={serverSelectorStyles.container}>
      <Text style={serverSelectorStyles.title}>Server</Text>

      <View style={serverSelectorStyles.list}>
        {servers.map((server, index) => {
          const active = server.serverId === selectedServer;

          return (
            <Pressable
              key={server.serverId}
              onPress={() => onChange(server.serverId)}
              style={[
                serverSelectorStyles.item,

                active && serverSelectorStyles.itemActive,
              ]}
            >
              <Text
                style={[
                  serverSelectorStyles.itemText,

                  active && serverSelectorStyles.itemTextActive,
                ]}
              >
                Server {index + 1}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
