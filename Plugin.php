<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
/**
 * Life Left, 人生倒计时, 从主题Joe提取
 * 
 * @package LifeLeft 
 * @author Echo
 * @version 1.0.0
 * @link https://github.com/Uncle-Antonio/LifeLeft/
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
        //$name = new Typecho_Widget_Helper_Form_Element_Text('word', NULL, 'Hello World', _t('说点什么'));
        //$form->addInput($name);
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
        $prefix = Typecho_Common::url('LifeLeft/assets', Helper::options()->pluginUrl);
        //echo $prefix;
        if(Helper::options()->theme == "handsome") echo '<div id="Theme_Handsome" display:none></div>';
        echo '<script src="' . $prefix . '/echo.min.js"></script>';
        echo '<link rel="stylesheet" href="' . $prefix . '/echo.min.css">';
        //require_once 'include.php';
    }
}
?>
