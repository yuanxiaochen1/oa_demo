<template>
  <div v-if="!item.hidden" class="submenuWrapper">
    <template v-if="item.children && item.children.length == 1">
      <app-link :to="item.children[0].path">
        <el-menu-item
          :index="item.children[0].path"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="item.children[0].meta.icon"
            :title="item.children[0].meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>
    <template v-else-if="!item.children || item.children.length === 0">
      <app-link :to="item.path">
        <el-menu-item
          :index="item.path"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item :icon="item.meta.icon" :title="item.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <item :icon="item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "./Link";
import FixiOSBug from "./FixiOSBug";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.submenuWrapper {
  .svg-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
