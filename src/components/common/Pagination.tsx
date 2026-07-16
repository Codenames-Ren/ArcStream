import { paginationStyles } from "@/styles/common";
import { Pressable, Text, View } from "react-native";

interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, total, onChange }: PaginationProps) {
  function goFirst() {
    if (page > 1) {
      onChange(1);
    }
  }

  function goPrevious() {
    if (page > 1) {
      onChange(page - 1);
    }
  }

  function goNext() {
    if (page < total) {
      onChange(page + 1);
    }
  }

  function goLast() {
    if (page < total) {
      onChange(total);
    }
  }

  function renderPages() {
    const pages: (number | string)[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }

      return pages;
    }

    if (page <= 3) {
      pages.push(1, 2, 3, "...", total);

      return pages;
    }

    if (page >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);

      return pages;
    }

    pages.push(1, "...", page - 1, page, page + 1, "...", total);

    return pages;
  }

  return (
    <View style={paginationStyles.container}>
      <Pressable
        style={[
          paginationStyles.button,

          page === 1 && paginationStyles.buttonDisabled,
        ]}
        disabled={page === 1}
        onPress={goFirst}
      >
        <Text style={paginationStyles.text}>«</Text>
      </Pressable>

      <Pressable
        style={[
          paginationStyles.button,

          page === 1 && paginationStyles.buttonDisabled,
        ]}
        disabled={page === 1}
        onPress={goPrevious}
      >
        <Text style={paginationStyles.text}>‹</Text>
      </Pressable>

      {renderPages().map((item, index) =>
        item === "..." ? (
          <Text key={`dots-${index}`} style={paginationStyles.dots}>
            ...
          </Text>
        ) : (
          <Pressable
            key={item}
            style={[
              paginationStyles.button,

              item === page && paginationStyles.buttonActive,
            ]}
            onPress={() => onChange(Number(item))}
          >
            <Text
              style={[
                paginationStyles.text,

                item === page && paginationStyles.textActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ),
      )}

      <Pressable
        style={[
          paginationStyles.button,

          page === total && paginationStyles.buttonDisabled,
        ]}
        disabled={page === total}
        onPress={goNext}
      >
        <Text style={paginationStyles.text}>›</Text>
      </Pressable>

      <Pressable
        style={[
          paginationStyles.button,

          page === total && paginationStyles.buttonDisabled,
        ]}
        disabled={page === total}
        onPress={goLast}
      >
        <Text style={paginationStyles.text}>»</Text>
      </Pressable>
    </View>
  );
}
