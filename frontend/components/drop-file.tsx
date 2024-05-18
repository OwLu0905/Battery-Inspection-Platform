"use client";
import React from "react";
import { Box, Button, Flex, Select, Text } from "@radix-ui/themes";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

export const DropFile = () => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "text/csv": [".csv"],
      },
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles, "onDrop");
      },
      onDropRejected: () => {
        alert("error");
      },
    });

  return (
    <Flex direction="column" gap="2">
      <Flex gap="4" mb="6" className="w-full lg:w-3/5">
        <Flex direction="column" gap="3" flexGrow="1">
          <Flex justify="between">
            <Text>選擇檔案(檔案格式csv): 123.csv</Text>
            <Button {...getRootProps()}>
              選擇檔案
              <input {...getInputProps()} className="p-8" />
            </Button>
          </Flex>
          <Select.Root>
            <Select.Trigger placeholder="選擇資料型態" className="" />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Item value="current">電流</Select.Item>
                <Select.Item value="voltage">電壓</Select.Item>
                <Select.Item value="custom" disabled>
                  自訂
                </Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
          <Select.Root>
            <Select.Trigger placeholder="計算模式" className="" />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Item value="current">內短路</Select.Item>
                <Select.Item value="voltage">健康狀態</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Flex>
      <Flex>
        <Flex direction="column" flexGrow="1">
          <div
            {...getRootProps()}
            className={cn(
              "group cursor-pointer border-2 border-dashed border-[--iris-8] p-8",
              "data-[drag=active]:border-[--iris-9]",
            )}
            data-drag={isDragActive ? "active" : "inactive"}
          >
            <input {...getInputProps()} className="p-8" />
            <Flex direction="column" gap="2" align="center">
              <Text>Drag your csv file here, or click to select files</Text>
              <Button className="w-fit cursor-pointer">上傳檔案</Button>
            </Flex>
          </div>
          <Flex>
            {acceptedFiles.map((i) => {
              return (
                <Flex key={i.size} align="center" gap="2">
                  <Text>{i.name}</Text>
                  <Cross1Icon color="red" />
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Box className="mx-auto w-2/5">
          <Text as="p" align="center" color="iris">
            計算結果
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
