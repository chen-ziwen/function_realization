# diff 算法

## Vue3 中的 diff 算法

### 简介

- 基于最长递增子序列的算法
- Vue3 使用的叫快速 diff 算法
- 借鉴 ivi 和 inferno + 纯文本 diff 算法
- 思路 贪心算法 + 二分查找 + 反向链表

### 快速 diff 算法的五个步骤

- 预处理前置节点
- 预处理后置节点
- 处理仅有新增节点情况
- 处理仅有卸载节点情况
- 处理其他情况 (新增、卸载、移动)
