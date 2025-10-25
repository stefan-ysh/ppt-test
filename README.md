# Next.js + Reveal.js 演示文稿中心

这是一个基于 Next.js 和 Reveal.js 的多演示文稿管理平台。支持多个 PPT 演示文稿，通过首页列表选择查看不同的演示内容。

## 功能特性

- 📋 **演示文稿列表** - 首页展示所有可用的 PPT
- 🎨 **美观的卡片设计** - 每个 PPT 都有缩略图、标题、作者等信息
- 🔗 **动态路由** - 点击卡片进入对应的演示文稿
- 🏠 **一键返回** - 演示页面有返回首页按钮
- ✨ **平滑过渡** - 卡片悬停效果和页面切换动画

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Reveal.js** - 演示文稿库

## 快速开始

### 1. 安装依赖

```bash
cd nextjs-reveal
pnpm install
# 或
npm install
# 或
yarn install
```

### 2. 复制图片资源

将以下图片复制到 `public/images/` 文件夹：
- `bj.jpg` - 首页背景图
- `tina.png` - 个人照片
- `chart.png` - 研究方向饼状图

### 3. 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
nextjs-reveal/
├── app/
│   ├── layout.tsx                    # 根布局
│   ├── page.tsx                      # 首页（PPT 列表）
│   ├── presentation/[id]/page.tsx    # 动态路由（演示页面）
│   └── globals.css
├── components/
│   ├── PresentationWrapper.tsx       # Reveal.js 包装组件
│   ├── presentations/                # 各个演示文稿
│   │   ├── luminescent-materials/
│   │   │   ├── index.tsx
│   │   │   └── slides/
│   │   │       ├── Slide1.tsx
│   │   │       ├── Slide2.tsx
│   │   │       └── Slide3.tsx
│   │   ├── luminescent-materials.tsx # 顶层 re-export
│   │   ├── sample/
│   │   │   ├── index.tsx
│   │   │   └── slides/
│   │   │       ├── Slide1.tsx
│   │   │       ├── Slide2.tsx
│   │   │       ├── Slide3.tsx
│   │   │       └── Slide4.tsx
│   │   └── sample.tsx                # 顶层 re-export
├── public/
│   └── images/                       # 图片资源
├── package.json
└── README.md
```

## 功能特性

- ✅ 响应式设计
- ✅ Tailwind CSS 样式
- ✅ TypeScript 类型检查
- ✅ 组件化幻灯片
- ✅ Reveal.js 完整功能支持
- ✅ 键盘导航
- ✅ 触摸支持

## 使用说明

### 添加新的演示文稿

#### 1. 使用脚本快速创建结构

```bash
chmod +x create-ppt.sh  # 首次运行需赋予执行权限
./create-ppt.sh
```

根据提示输入 ID、标题等信息，脚本会自动生成：

- `components/presentations/<ppt-id>/index.tsx`
- `components/presentations/<ppt-id>/slides/Slide1.tsx` 等基础幻灯片
- `components/presentations/<ppt-id>.tsx` 顶层导出文件

可根据需要补充或删除默认幻灯片。

#### 2. 在首页添加 PPT 信息

编辑 `app/page.tsx`，在 `presentations` 数组中添加：

```tsx
const presentations = [
  // ...现有的 PPT
  {
    id: 'my-presentation',           // 路由 ID
    title: '我的演示文稿',
    subtitle: '这是演示文稿的描述',
    author: '作者名',
    department: '单位名称',
    thumbnail: '/images/my-thumbnail.jpg',
    date: '2024年',
    slides: 15,
  },
]
```

#### 3. 注册路由

编辑 `app/presentation/[id]/page.tsx`，添加映射：

```tsx
const presentations = {
  // ...现有的映射
  'my-presentation': {
    title: '我的演示文稿',
    slides: 'my-presentation',
  },
}
```

#### 4. 添加到包装器

编辑 `components/PresentationWrapper.tsx`：

```tsx
// 导入
import MyPresentationSlides from './presentations/my-presentation'

// 在 renderSlides() 中添加
case 'my-presentation':
  return <MyPresentationSlides />
```

### 添加单个幻灯片到现有演示

在对应的演示文稿组件中添加新的 `<section>`：

```tsx
<section data-background="#your-color">
  <h2>新幻灯片标题</h2>
  <div className="content">
    {/* 你的内容 */}
  </div>
</section>
```

### 自定义 Reveal.js 配置

在 `components/PresentationWrapper.tsx` 中修改配置：

```tsx
revealRef.current = new Reveal(deckRef.current, {
  controls: true,        // 显示控制按钮
  progress: true,        // 显示进度条
  center: true,          // 内容垂直居中
  hash: true,            // URL 同步
  transition: 'slide',   // 切换效果
  width: 1920,          // 宽度
  height: 1080,         // 高度
})
```

## 键盘快捷键

- **方向键** - 导航幻灯片
- **Space** - 下一张
- **ESC** - 幻灯片总览
- **F** - 全屏模式
- **S** - 演讲者模式

## 构建部署

```bash
# 生产构建
pnpm build

# 启动生产服务器
pnpm start
```

## License

MIT
