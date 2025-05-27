#!/bin/bash

# this matches where
cd ../Protos

# Path to this plugin
# PROTOC_GEN_TS="protoc-gen-ts=../../../node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_TS="../node_modules/.bin/protoc-gen-ts_proto"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="../interfaces"

mkdir -p $OUT_DIR

protoc \
    --plugin="${PROTOC_GEN_TS}" \
    --ts_proto_out="${OUT_DIR}" \
    --ts_proto_opt="outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,exportCommonSymbols=false" \
    ./**/*
