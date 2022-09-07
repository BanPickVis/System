<template>
    <svg>
        <rect id="hero_sequence1" class="hero_icon" filter="url(#trans-shadow)" x="15" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(width, 200, 1)" />
        <rect id="hero_sequence3" class="hero_icon" filter="url(#trans-shadow)" x="90" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(175, 200, 3)" />

        <image id="hero_sequence1" class="hero_icon" x="50" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(100, 200, 1)" />

        <image id="hero_sequence3" class="hero_icon" x="125" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(175, 200, 3)" />

        <rect id="hero_sequence2" class="hero_icon" filter="url(#trans-shadow)" x="475" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(560, 200, 2)" />

        <rect id="hero_sequence4" class="hero_icon" filter="url(#trans-shadow)" x="550" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(635, 200, 4)" />

        <image id="hero_sequence2" class="hero_icon" x="510" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(560, 200, 2)" />

        <image id="hero_sequence4" class="hero_icon" x="585" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(635, 200, 4)" />

        <rect id="hero_sequence5" class="hero_icon" filter="url(#trans-shadow)" x="10" y="95" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 300, 5)" />

        <rect id="hero_sequence6" class="hero_icon" filter="url(#trans-shadow)" x="540" y="95" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 300, 6)" />

        <rect id="hero_sequence8" class="hero_icon" filter="url(#trans-shadow)" x="10" y="195" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 400, 8)" />

        <rect id="hero_sequence7" class="hero_icon" filter="url(#trans-shadow)" x="540" y="195" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 400, 7)" />

        <rect id="hero_sequence9" class="hero_icon" filter="url(#trans-shadow)" x="10" y="295" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 500, 9)" />

        <rect id="hero_sequence10" class="hero_icon" filter="url(#trans-shadow)" x="540" y="295" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 500, 10)" />

        <rect id="hero_sequence11" class="hero_icon" filter="url(#trans-shadow)" x="15" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(100, 600, 11)" />

        <rect id="hero_sequence13" class="hero_icon" filter="url(#trans-shadow)" x="90" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(175, 600, 13)" />

        <image id="hero_sequence11" class="hero_icon" x="50" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(100, 600, 11)" />

        <image id="hero_sequence13" class="hero_icon" x="125" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(175, 600, 13)" />

        <rect id="hero_sequence12" class="hero_icon" filter="url(#trans-shadow)" x="475" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(560, 600, 12)" />

        <rect id="hero_sequence14" class="hero_icon" filter="url(#trans-shadow)" x="550" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(635, 600, 14)" />

        <image id="hero_sequence12" class="hero_icon" x="510" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(560, 600, 12)" />

        <image id="hero_sequence14" class="hero_icon" x="585" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(635, 600, 14)" />

        <rect id="hero_sequence16" class="hero_icon" filter="url(#trans-shadow)" x="10" y="475" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 700, 16)" />

        <rect id="hero_sequence15" class="hero_icon" filter="url(#trans-shadow)" x="540" y="475" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 700, 15)" />

        <rect id="hero_sequence17" class="hero_icon" filter="url(#trans-shadow)" x="10" y="575" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 800, 17)" />

        <rect id="hero_sequence18" class="hero_icon" filter="url(#trans-shadow)" x="540" y="575" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 800, 18)" />
        <defs>
            <pattern id="pnone" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#none" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="none" width="150" height="160" :href="require('../../assets/image/icon/none.jpg')" />
            <pattern id="p廉颇" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#廉颇" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="廉颇" width="150" height="160" :href="require('../../assets/image/icon/廉颇.jpg')" />
            <pattern id="p小乔" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#小乔" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="小乔" width="150" height="160" :href="require('../../assets/image/icon/小乔.jpg')" />
            <pattern id="p赵云" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#赵云" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="赵云" width="150" height="160" :href="require('../../assets/image/icon/赵云.jpg')" />
            <pattern id="p墨子" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#墨子" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="墨子" width="150" height="160" :href="require('../../assets/image/icon/墨子.jpg')" />
            <pattern id="p妲己" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#妲己" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="妲己" width="150" height="160" :href="require('../../assets/image/icon/妲己.jpg')" />
            <pattern id="p嬴政" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#嬴政" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="嬴政" width="150" height="160" :href="require('../../assets/image/icon/嬴政.jpg')" />
            <pattern id="p孙尚香" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#孙尚香" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="孙尚香" width="150" height="160" :href="require('../../assets/image/icon/孙尚香.jpg')" />
            <pattern id="p鲁班七号" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#鲁班七号" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="鲁班七号" width="150" height="160" :href="require('../../assets/image/icon/鲁班七号.jpg')" />
            <pattern id="p庄周" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#庄周" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="庄周" width="150" height="160" :href="require('../../assets/image/icon/庄周.jpg')" />
            <pattern id="p刘禅" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#刘禅" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="刘禅" width="150" height="160" :href="require('../../assets/image/icon/刘禅.jpg')" />
            <pattern id="p高渐离" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#高渐离" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="高渐离" width="150" height="160" :href="require('../../assets/image/icon/高渐离.jpg')" />
            <pattern id="p阿轲" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#阿轲" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="阿轲" width="150" height="160" :href="require('../../assets/image/icon/阿轲.jpg')" />
            <pattern id="p钟无艳" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#钟无艳" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="钟无艳" width="150" height="160" :href="require('../../assets/image/icon/钟无艳.jpg')" />
            <pattern id="p孙膑" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#孙膑" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="孙膑" width="150" height="160" :href="require('../../assets/image/icon/孙膑.jpg')" />
            <pattern id="p扁鹊" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#扁鹊" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="扁鹊" width="150" height="160" :href="require('../../assets/image/icon/扁鹊.jpg')" />
            <pattern id="p白起" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#白起" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="白起" width="150" height="160" :href="require('../../assets/image/icon/白起.jpg')" />
            <pattern id="p芈月" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#芈月" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="芈月" width="150" height="160" :href="require('../../assets/image/icon/芈月.jpg')" />
            <pattern id="p吕布" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#吕布" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="吕布" width="150" height="160" :href="require('../../assets/image/icon/吕布.jpg')" />
            <pattern id="p周瑜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#周瑜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="周瑜" width="150" height="160" :href="require('../../assets/image/icon/周瑜.jpg')" />
            <pattern id="p夏侯惇" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#夏侯惇" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="夏侯惇" width="150" height="160" :href="require('../../assets/image/icon/夏侯惇.jpg')" />
            <pattern id="p甄姬" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#甄姬" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="甄姬" width="150" height="160" :href="require('../../assets/image/icon/甄姬.jpg')" />
            <pattern id="p曹操" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#曹操" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="曹操" width="150" height="160" :href="require('../../assets/image/icon/曹操.jpg')" />
            <pattern id="p典韦" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#典韦" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="典韦" width="150" height="160" :href="require('../../assets/image/icon/典韦.jpg')" />
            <pattern id="p宫本武藏" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#宫本武藏" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="宫本武藏" width="150" height="160" :href="require('../../assets/image/icon/宫本武藏.jpg')" />
            <pattern id="p李白" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#李白" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="李白" width="150" height="160" :href="require('../../assets/image/icon/李白.jpg')" />
            <pattern id="p马可波罗" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#马可波罗" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="马可波罗" width="150" height="160" :href="require('../../assets/image/icon/马可波罗.jpg')" />
            <pattern id="p狄仁杰" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#狄仁杰" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="狄仁杰" width="150" height="160" :href="require('../../assets/image/icon/狄仁杰.jpg')" />
            <pattern id="p达摩" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#达摩" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="达摩" width="150" height="160" :href="require('../../assets/image/icon/达摩.jpg')" />
            <pattern id="p项羽" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#项羽" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="项羽" width="150" height="160" :href="require('../../assets/image/icon/项羽.jpg')" />
            <pattern id="p武则天" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#武则天" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="武则天" width="150" height="160" :href="require('../../assets/image/icon/武则天.jpg')" />
            <pattern id="p老夫子" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#老夫子" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="老夫子" width="150" height="160" :href="require('../../assets/image/icon/老夫子.jpg')" />
            <pattern id="p关羽" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#关羽" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="关羽" width="150" height="160" :href="require('../../assets/image/icon/关羽.jpg')" />
            <pattern id="p貂蝉" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#貂蝉" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="貂蝉" width="150" height="160" :href="require('../../assets/image/icon/貂蝉.jpg')" />
            <pattern id="p安琪拉" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#安琪拉" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="安琪拉" width="150" height="160" :href="require('../../assets/image/icon/安琪拉.jpg')" />
            <pattern id="p程咬金" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#程咬金" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="程咬金" width="150" height="160" :href="require('../../assets/image/icon/程咬金.jpg')" />
            <pattern id="p露娜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#露娜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="露娜" width="150" height="160" :href="require('../../assets/image/icon/露娜.jpg')" />
            <pattern id="p姜子牙" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#姜子牙" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="姜子牙" width="150" height="160" :href="require('../../assets/image/icon/姜子牙.jpg')" />
            <pattern id="p刘邦" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#刘邦" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="刘邦" width="150" height="160" :href="require('../../assets/image/icon/刘邦.jpg')" />
            <pattern id="p韩信" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#韩信" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="韩信" width="150" height="160" :href="require('../../assets/image/icon/韩信.jpg')" />
            <pattern id="p王昭君" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#王昭君" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="王昭君" width="150" height="160" :href="require('../../assets/image/icon/王昭君.jpg')" />
            <pattern id="p兰陵王" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#兰陵王" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="兰陵王" width="150" height="160" :href="require('../../assets/image/icon/兰陵王.jpg')" />
            <pattern id="p花木兰" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#花木兰" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="花木兰" width="150" height="160" :href="require('../../assets/image/icon/花木兰.jpg')" />
            <pattern id="p张良" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#张良" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="张良" width="150" height="160" :href="require('../../assets/image/icon/张良.jpg')" />
            <pattern id="p不知火舞" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#不知火舞" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="不知火舞" width="150" height="160" :href="require('../../assets/image/icon/不知火舞.jpg')" />
            <pattern id="p娜可露露" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#娜可露露" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="娜可露露" width="150" height="160" :href="require('../../assets/image/icon/娜可露露.jpg')" />
            <pattern id="p橘右京" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#橘右京" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="橘右京" width="150" height="160" :href="require('../../assets/image/icon/橘右京.jpg')" />
            <pattern id="p亚瑟" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#亚瑟" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="亚瑟" width="150" height="160" :href="require('../../assets/image/icon/亚瑟.jpg')" />
            <pattern id="p孙悟空" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#孙悟空" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="孙悟空" width="150" height="160" :href="require('../../assets/image/icon/孙悟空.jpg')" />
            <pattern id="p牛魔" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#牛魔" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="牛魔" width="150" height="160" :href="require('../../assets/image/icon/牛魔.jpg')" />
            <pattern id="p后羿" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#后羿" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="后羿" width="150" height="160" :href="require('../../assets/image/icon/后羿.jpg')" />
            <pattern id="p刘备" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#刘备" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="刘备" width="150" height="160" :href="require('../../assets/image/icon/刘备.jpg')" />
            <pattern id="p张飞" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#张飞" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="张飞" width="150" height="160" :href="require('../../assets/image/icon/张飞.jpg')" />
            <pattern id="p李元芳" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#李元芳" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="李元芳" width="150" height="160" :href="require('../../assets/image/icon/李元芳.jpg')" />
            <pattern id="p虞姬" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#虞姬" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="虞姬" width="150" height="160" :href="require('../../assets/image/icon/虞姬.jpg')" />
            <pattern id="p钟馗" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#钟馗" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="钟馗" width="150" height="160" :href="require('../../assets/image/icon/钟馗.jpg')" />
            <pattern id="p成吉思汗" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#成吉思汗" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="成吉思汗" width="150" height="160" :href="require('../../assets/image/icon/成吉思汗.jpg')" />
            <pattern id="p杨戬" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#杨戬" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="杨戬" width="150" height="160" :href="require('../../assets/image/icon/杨戬.jpg')" />
            <pattern id="p雅典娜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#雅典娜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="雅典娜" width="150" height="160" :href="require('../../assets/image/icon/雅典娜.jpg')" />
            <pattern id="p蔡文姬" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#蔡文姬" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="蔡文姬" width="150" height="160" :href="require('../../assets/image/icon/蔡文姬.jpg')" />
            <pattern id="p太乙真人" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#太乙真人" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="太乙真人" width="150" height="160" :href="require('../../assets/image/icon/太乙真人.jpg')" />
            <pattern id="p哪吒" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#哪吒" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="哪吒" width="150" height="160" :href="require('../../assets/image/icon/哪吒.jpg')" />
            <pattern id="p诸葛亮" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#诸葛亮" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="诸葛亮" width="150" height="160" :href="require('../../assets/image/icon/诸葛亮.jpg')" />
            <pattern id="p黄忠" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#黄忠" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="黄忠" width="150" height="160" :href="require('../../assets/image/icon/黄忠.jpg')" />
            <pattern id="p大乔" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#大乔" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="大乔" width="150" height="160" :href="require('../../assets/image/icon/大乔.jpg')" />
            <pattern id="p东皇太一" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#东皇太一" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="东皇太一" width="150" height="160" :href="require('../../assets/image/icon/东皇太一.jpg')" />
            <pattern id="p干将莫邪" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#干将莫邪" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="干将莫邪" width="150" height="160" :href="require('../../assets/image/icon/干将莫邪.jpg')" />
            <pattern id="p鬼谷子" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#鬼谷子" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="鬼谷子" width="150" height="160" :href="require('../../assets/image/icon/鬼谷子.jpg')" />
            <pattern id="p铠" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#铠" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="铠" width="150" height="160" :href="require('../../assets/image/icon/铠.jpg')" />
            <pattern id="p百里守约" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#百里守约" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="百里守约" width="150" height="160" :href="require('../../assets/image/icon/百里守约.jpg')" />
            <pattern id="p百里玄策" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#百里玄策" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="百里玄策" width="150" height="160" :href="require('../../assets/image/icon/百里玄策.jpg')" />
            <pattern id="p苏烈" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#苏烈" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="苏烈" width="150" height="160" :href="require('../../assets/image/icon/苏烈.jpg')" />
            <pattern id="p梦奇" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#梦奇" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="梦奇" width="150" height="160" :href="require('../../assets/image/icon/梦奇.jpg')" />
            <pattern id="p女娲" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#女娲" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="女娲" width="150" height="160" :href="require('../../assets/image/icon/女娲.jpg')" />
            <pattern id="p明世隐" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#明世隐" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="明世隐" width="150" height="160" :href="require('../../assets/image/icon/明世隐.jpg')" />
            <pattern id="p公孙离" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#公孙离" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="公孙离" width="150" height="160" :href="require('../../assets/image/icon/公孙离.jpg')" />
            <pattern id="p杨玉环" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#杨玉环" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="杨玉环" width="150" height="160" :href="require('../../assets/image/icon/杨玉环.jpg')" />
            <pattern id="p裴擒虎" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#裴擒虎" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="裴擒虎" width="150" height="160" :href="require('../../assets/image/icon/裴擒虎.jpg')" />
            <pattern id="p弈星" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#弈星" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="弈星" width="150" height="160" :href="require('../../assets/image/icon/弈星.jpg')" />
            <pattern id="p狂铁" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#狂铁" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="狂铁" width="150" height="160" :href="require('../../assets/image/icon/狂铁.jpg')" />
            <pattern id="p米莱狄" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#米莱狄" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="米莱狄" width="150" height="160" :href="require('../../assets/image/icon/米莱狄.jpg')" />
            <pattern id="p元歌" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#元歌" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="元歌" width="150" height="160" :href="require('../../assets/image/icon/元歌.jpg')" />
            <pattern id="p孙策" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#孙策" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="孙策" width="150" height="160" :href="require('../../assets/image/icon/孙策.jpg')" />
            <pattern id="p司马懿" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#司马懿" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="司马懿" width="150" height="160" :href="require('../../assets/image/icon/司马懿.jpg')" />
            <pattern id="p盾山" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#盾山" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="盾山" width="150" height="160" :href="require('../../assets/image/icon/盾山.jpg')" />
            <pattern id="p伽罗" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#伽罗" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="伽罗" width="150" height="160" :href="require('../../assets/image/icon/伽罗.jpg')" />
            <pattern id="p沈梦溪" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#沈梦溪" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="沈梦溪" width="150" height="160" :href="require('../../assets/image/icon/沈梦溪.jpg')" />
            <pattern id="p李信" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#李信" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="李信" width="150" height="160" :href="require('../../assets/image/icon/李信.jpg')" />
            <pattern id="p上官婉儿" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#上官婉儿" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="上官婉儿" width="150" height="160" :href="require('../../assets/image/icon/上官婉儿.jpg')" />
            <pattern id="p嫦娥" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#嫦娥" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="嫦娥" width="150" height="160" :href="require('../../assets/image/icon/嫦娥.jpg')" />
            <pattern id="p猪八戒" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#猪八戒" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="猪八戒" width="150" height="160" :href="require('../../assets/image/icon/猪八戒.jpg')" />
            <pattern id="p盘古" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#盘古" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="盘古" width="150" height="160" :href="require('../../assets/image/icon/盘古.jpg')" />
            <pattern id="p瑶" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#瑶" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="瑶" width="150" height="160" :href="require('../../assets/image/icon/瑶.jpg')" />
            <pattern id="p云中君" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#云中君" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="云中君" width="150" height="160" :href="require('../../assets/image/icon/云中君.jpg')" />
            <pattern id="p曜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#曜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="曜" width="150" height="160" :href="require('../../assets/image/icon/曜.jpg')" />
            <pattern id="p马超" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#马超" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="马超" width="150" height="160" :href="require('../../assets/image/icon/马超.jpg')" />
            <pattern id="p西施" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#西施" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="西施" width="150" height="160" :href="require('../../assets/image/icon/西施.jpg')" />
            <pattern id="p鲁班大师" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#鲁班大师" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="鲁班大师" width="150" height="160" :href="require('../../assets/image/icon/鲁班大师.jpg')" />
            <pattern id="p蒙犽" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#蒙犽" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="蒙犽" width="150" height="160" :href="require('../../assets/image/icon/蒙犽.jpg')" />
            <pattern id="p镜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#镜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="镜" width="150" height="160" :href="require('../../assets/image/icon/镜.jpg')" />
            <pattern id="p蒙恬" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#蒙恬" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="蒙恬" width="150" height="160" :href="require('../../assets/image/icon/蒙恬.jpg')" />
            <pattern id="p阿古朵" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#阿古朵" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="阿古朵" width="150" height="160" :href="require('../../assets/image/icon/阿古朵.jpg')" />
            <pattern id="p夏洛特" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#夏洛特" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="夏洛特" width="150" height="160" :href="require('../../assets/image/icon/夏洛特.jpg')" />
            <pattern id="p澜" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#澜" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="澜" width="150" height="160" :href="require('../../assets/image/icon/澜.jpg')" />
            <pattern id="p司空震" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#司空震" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="司空震" width="150" height="160" :href="require('../../assets/image/icon/司空震.jpg')" />
            <pattern id="p艾琳" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#艾琳" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="艾琳" width="150" height="160" :href="require('../../assets/image/icon/艾琳.jpg')" />
            <pattern id="p云缨" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#云缨" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="云缨" width="150" height="160" :href="require('../../assets/image/icon/云缨.jpg')" />
            <pattern id="p金蝉" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#金蝉" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="金蝉" width="150" height="160" :href="require('../../assets/image/icon/金蝉.jpg')" />
            <pattern id="p暃" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#暃" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="暃" width="150" height="160" :href="require('../../assets/image/icon/暃.jpg')" />
            <pattern id="p桑启" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#桑启" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="桑启" width="150" height="160" :href="require('../../assets/image/icon/桑启.jpg')" />
            <pattern id="p戈娅" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#戈娅" transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)" />
            </pattern>
            <image id="戈娅" width="150" height="160" :href="require('../../assets/image/icon/戈娅.jpg')" />

            <filter id="trans-shadow" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="3" dy="3"></feOffset>
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"></feGaussianBlur>
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
            </filter>

            
        </defs>
    </svg>
</template>

<script>
export default {
    // ////////////////////////////////
    // data() {
    //     return {
    //         sequenceSelection: 0,
    //     };
    // },
    ////////////////////////////////
    props:{
        seqr1:{type:Object, default:()=>{}},
        seqr2:{type:Object, default:()=>{}},
        seqr3:{type:Object, default:()=>{}},
        seqr4:{type:Object, default:()=>{}},
        seqr5:{type:Object, default:()=>{}},
        seqr6:{type:Object, default:()=>{}},
    },
    computed: {
        team1: function () {
            return this.team1abbr;
        },
        team2: function () {
            return this.team2abbr;
        },
        hero1: function () {
            return "none";
        }
    },
    watch: {
    },
    mounted() {
        this.default_change();
    },
    methods: {
        default_change(){
            let block;
            let seqn;
            var highlight;
            var flag =0;
            // let preivious_seq = await requesthelp.axiosGet('/selected', {round: "1"} );
            let preivious_seq = this.seqr1;
            for (var i=0;i<preivious_seq.length;i++){
                seqn = i+1;
                block = document.getElementById("hero_sequence"+seqn);
                // console.log(preivious_seq[i]);
                // console.log(flag);
                if (preivious_seq[i]=="none" && flag == 0){
                    highlight=i+1;
                    flag = 1;
                }
                block.style.fill = "url(#p"+preivious_seq[i]+")";
                block.style.stroke="none";
            }
            // console.log(highlight);
            block = document.getElementById("hero_sequence"+highlight);
            // console.log(block);
            block.style.stroke = "#4E6AFF";
            // let block = document.getElementById("hero_sequence"+seq_num);
            // console.log(block);
            // block.style.fill = "url(#p"+hero+")";
        },
        select(x, y, num) {
            let block = document.getElementById("selection_view");
            // console.log(x);
            block.style.left = x + "px";
            block.style.top = y + "px";
            block.style.display = "inline-block";
            // await requesthelp.axiosGet('/sequence_number', { sequence_num: num, round_num: 1});
            block = document.getElementById("hero_sequence"+num);
            block.style.stroke = "none";
            block = document.getElementById("hero_sequence"+(num+1));
            block.style.stroke = "#4E6AFF";
            this.changeSequence(num);
            this.round(1);
        },
        changeSequence(sequence_change){
            // console.log(sequence_change);
            this.$emit('sequenceSelection', sequence_change); 
        },
        round(val){
            // console.log(sequence_change);
            this.$emit('theround', val); 
        }

    },
};
</script>

<style>
.hero_icon{
    cursor: pointer;
    stroke: none;
    stroke-width: 3px;
}
</style>