import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";
import Auth from "../auth";

export default function Home() {
  return (
    <Auth />
    // <View>
    //   <FlatList
    //     data={PRODUCTS}
    //     renderItem={({ item }) => <ProductListItem product={item} />}
    //     keyExtractor={(item) => item.imagesUrl.toString()}
    //     numColumns={2}
    //     ListHeaderComponent={ListHeader}
    //     contentContainerStyle={styles.flatListContent}
    //     columnWrapperStyle={styles.flatListColumn}
    //     style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
