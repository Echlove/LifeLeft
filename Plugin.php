<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
/**
 * Life Left, 人生倒计时, 从主题Joe提取
 * 
 * @package LifeLeft 
 * @author Echo
 * @version 1.0.0
 * @link https://github.com/HaoOuBa/Joe
 */
class LifeLeft_Plugin implements Typecho_Plugin_Interface
{
    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate()
    {
        Typecho_Plugin::factory('Widget_Archive')->footer = array('LifeLeft_Plugin', 'footer');
    }
    
    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate(){}
    
    /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form)
    {
        /** 分类名称 */
        if(Helper::options()->theme == "handsome") {
            $lifeleft_loc = new Typecho_Widget_Helper_Form_Element_Select("lifeleft_loc", array(
                'tabs-4' => "[热门、随机、评论]前",
                'blog_info' => "[博客信息]前",
                'a_d_sidebar' => "[右侧边栏广告位]前",
                'tag_cloud-2' => "[标签云/目录]前"
            ), "blog_info", "位置选择", "<strong style='color: red'> 【友情提示】请确保设置的组件已经启用</strong>");
            $form->addInput($lifeleft_loc);
        }
        else {
            $form->addInput(new Typecho_Widget_Helper_Form_Element_Select("lifeleft_loc", array(
                '1' => "请手动插入",
            ), "1", "请手动插入", "<strong style='color: red'> 【友情提示】目前仅适配handsome，其他主题请手动插入，以后会适配</strong>"));
            $form->addInput(new Typecho_Widget_Helper_Form_Element_Text(
                'div_class',
                null,
                '',
                _t('元素class设置'),
                _t('建议和你用的主题的sidebar中元素class一致，看起来和谐')
            ));
            $form->addInput(new Typecho_Widget_Helper_Form_Element_Text(
                'div_loc',
                null,
                '',
                _t('插入位置的下一个元素的id'),
                _t('用F12找到你想插在哪两个元素间，填写后一个元素的id')
            ));
        }
    }
    
    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 插件实现方法
     * 
     * @access public
     * @return void
     */
    public static function footer()
    {
        //echo Helper::options()->theme;
        $loc = Helper::options()->plugin('LifeLeft')->lifeleft_loc;
        //if(Helper::options()->theme == "handsome") echo '<div id="Theme_Handsome" display:none></div>';
        $prefix = Typecho_Common::url('LifeLeft/assets', Helper::options()->pluginUrl);
        //echo $prefix;
        $js_loc = '#'.$loc;
        //echo '<script $("<section id="lifeleft" 
        //class="widget widget_categories wrapper-md clear lifeleft"></section>")
        //.insertBefore("' + escape('#') + $loc + '")</script>';
        if(Helper::options()->theme == "handsome"){
            echo '<script type="text/javascript">function create_div() { $("<section id=\"lifeleft\" '.
            'class=\"widget widget_categories wrapper-md clear lifeleft\">'.
            '</section>").insertBefore("'.$js_loc.'")}</script>';
        }
        else{
            echo '<script type="text/javascript">function create_div() { '.
            ''.
            '}</script>';
                
        }
        echo '<script src="' . $prefix . '/echo.min.js"></script>';
        echo '<link rel="stylesheet" href="' . $prefix . '/echo.min.css">';
    }
}
?>
