<!--
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2021-06-03 16:32:59
 * @LastEditTime: 2021-06-03 18:02:46
 * @LastEditors: @Xin (834529118@qq.com)
-->
<template>
  <div id="app">
    <div>
      x:{{ demo01.x }} <button @click="x += 10">+</button><button @click="x -= 10">-</button>
    </div>
    <div>
      y:{{ demo01.y }}<button @click="y += 10">+</button><button @click="y -= 10">-</button>
    </div>
    <div>
      w:{{ demo01.w }}<button @click="w += 10">+</button><button @click="w -= 10">-</button>
    </div>
    <div>
      h: {{ demo01.h }}<button @click="h += 10">+</button><button @click="h -= 10">-</button>
    </div>
    <div>active:{{ active }}<br /></div>
    <div class="parent">
      <DraggableContainer :referenceLineVisible="true">
        <Vue3DraggableResizable
          :initW="150"
          :initH="150"
          v-model:x="demo01.x"
          v-model:y="demo01.y"
          v-model:w="demo01.w"
          v-model:h="demo01.h"
          v-model:active="demo01.active"
          :draggable="demo01.draggable"
          :resizable="demo01.resizable"
          :parent="true"
          :scale="0.8"
          :disabledX="false"
          :disabledW="false"
          :disabledH="false"
          :disabledY="false"
          classNameHandle="my-handle"
          @activated="print('activated')"
          @deactivated="print('deactivated')"
          @drag-start="print('drag-start', $event)"
          @resize-start="print('resize-start', $event)"
          @dragging="print('dragging', $event)"
          @resizing="print('resizing', $event)"
          @drag-end="print('drag-end', $event)"
          @resize-end="print('resize-end', $event)"
        >
          This is a test example1
        </Vue3DraggableResizable>
        <Vue3DraggableResizable
          :initW="400"
          :initH="400"
          v-model:x="demo02.x"
          v-model:y="demo02.y"
          v-model:w="demo02.w"
          v-model:h="demo02.h"
          v-model:active="demo02.active"
          :draggable="demo02.draggable"
          :resizable="demo02.resizable"
          :parent="true"
          :scale="0.8"
          :disabledX="false"
          :disabledW="false"
          :disabledH="false"
          :disabledY="false"
          classNameHandle="my-handle"
          @activated="print('activated')"
          @deactivated="print('deactivated')"
          @drag-start="print('drag-start', $event)"
          @resize-start="print('resize-start', $event)"
          @dragging="print('dragging', $event)"
          @resizing="print('resizing', $event)"
          @drag-end="print('drag-end', $event)"
          @resize-end="print('resize-end', $event)"
        >
          This is a test example2
        </Vue3DraggableResizable>
      </DraggableContainer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Vue3DraggableResizable from "./components/Vue3DraggableResizable";
import DraggableContainer from "./components/DraggableContainer";

export default defineComponent({
  components: { DraggableContainer, Vue3DraggableResizable },
  data() {
    return {
      demo01: {
        x: 100,
        y: 100,
        h: 100,
        w: 100,
        active: false,
        draggable: true,
        resizable: true,
      },
      demo02: {
        x: 150,
        y: 150,
        h: 100,
        w: 100,
        active: false,
        draggable: true,
        resizable: true,
      }
    };
  },
  mounted() {},
  methods: {
    print(val, e) {
      // console.log(val, e)
    },
  },
});
</script>
<style lang="less" scoped>
.parent {
  width: 1800px;
  height: 800px;
  // position: absolute;
  // top: 100px;
  // left: 200px;
  position: relative;
  border: 1px solid #000;
  user-select: none;
  transform: scale(0.8);
  ::v-deep {
    .vdr-container {
      border-color: #999;
    }
  }
}
</style>
